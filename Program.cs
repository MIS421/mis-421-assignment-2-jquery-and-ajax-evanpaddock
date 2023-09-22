namespace FL2023_MIS521_Assignment2_epaddock;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var app = builder.Build();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        app.Run();
    }
}

