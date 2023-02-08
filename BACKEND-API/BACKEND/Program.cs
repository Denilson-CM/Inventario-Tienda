using DATA;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var proveedor = builder.Services.BuildServiceProvider();
var configuration = proveedor.GetRequiredService<IConfiguration>();
builder.Services.AddCors(opciones =>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");

    opciones.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });
});

builder.Services.AddDbContext<IVContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DBConnection"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.Run();
